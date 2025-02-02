import { UserProfile } from "@/datatypes/userProfile";
import { prisma } from "@/db";
import {
  Relationship as PrismaRelationship,
  RelationshipType as PrismaRelationshipType,
  User,
} from "@prisma/client";
import { Relationship, RelationshipType } from "@/datatypes/relationship";
import { cleanUserDetails } from "@/pages/api/user";

export async function getFriends(userId: string): Promise<UserProfile[]> {
  const friends = await prisma.relationship.findMany({
    where: {
      type: PrismaRelationshipType.FRIENDSHIP,
      OR: [{ recipientId: userId }, { senderId: userId }],
    },
    include: {
      recipient: true,
      sender: true,
    },
  });

  const normalizedRelationships = friends.map((r) =>
    normalizeRelationship(r, userId)
  );

  return normalizedRelationships.map((r) => r.profile as UserProfile);
}

type FullPrismaRelationship = PrismaRelationship & {
  sender: User;
  recipient: User;
};

export function normalizeRelationship(
  prismaRelationship: FullPrismaRelationship,
  userId: string
): Relationship {
  return {
    profile: getProfile(prismaRelationship, userId),
    type: getRelationshipType(prismaRelationship, userId),
    lastUpdate: prismaRelationship.updatedAt,
  };
}

function getProfile(
  relationship: FullPrismaRelationship,
  userId: string
): UserProfile {
  const profile =
    relationship.recipientId === userId
      ? relationship.sender
      : relationship.recipient;
  return relationship.type === PrismaRelationshipType.FRIENDSHIP
    ? profile
    : convertToUserProfile(profile);
}

function convertToUserProfile(user: User): UserProfile {
  const cleanUser = cleanUserDetails(user);
  return {
    id: cleanUser.id,
    name: cleanUser.name,
    image: cleanUser.image,
    role: cleanUser.role,
    about: cleanUser.about,
    realName: cleanUser.realName,
    place: cleanUser.place,
    bggName: cleanUser.bggName,
  };
}

function getRelationshipType(
  relationship: FullPrismaRelationship,
  userId: string
): RelationshipType {
  if (relationship.type === "FRIENDSHIP") {
    return RelationshipType.FRIENDSHIP;
  } else if (relationship.type === "FRIEND_REQUEST") {
    if (relationship.sender.id === userId) {
      return RelationshipType.FRIEND_REQUEST_SENT;
    } else {
      return RelationshipType.FRIEND_REQUEST_RECEIVED;
    }
  }
  throw new Error("Error determining relationship type");
}
