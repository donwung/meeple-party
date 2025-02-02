import Login from "@/app/components/Login/Login";
import classNames from "classnames";
import Image from "next/image";
import { PropsWithChildren } from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={classNames("container-fluid", styles.highlight)}>
        <div className="row align-items-center g-5 p-5">
          <div className="col-md-3">
            <Image
              src="/logo.svg"
              width={400}
              height={300}
              alt="Meeple Party"
              className={styles.image}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-1">Meeple Party</h1>
            <h2 className="display-6">
              Spend more time playing, less time browsing.
            </h2>
          </div>
          <div className="col-md-3">
            <Login />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3 alert alert-warning">
            <h3>👨‍💻 Meeple Party is currently in beta!</h3>
            I&apos;m doing my best but I&apos;m still doing my best as a hobby
            in my free time. Some parts are still a bit rough. Not everything
            may work as you expect or at all. You may lose data at some point.
            Things may take a little longer to fix then I&apos;d like. If you
            notice something strange or broken please report it (see footer for
            various places to do so).
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-bg-primary">
              <Image
                src="/highlight-card-1.png"
                className={classNames("card-img-top", styles.feature)}
                alt="Screenshot of combined collection views"
                width={414}
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">Combined collection views</h5>
                <p className="card-text">
                  See what your group of friends want to play at a glance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-primary">
              <Image
                src="/highlight-card-2.png"
                className={classNames("card-img-top", styles.feature)}
                alt="Screenshot of Meeple Party's filtering feature."
                width={414}
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">Exhaustive filtering</h5>
                <p className="card-text">
                  Filter on game attributes, your and your friend&apos;s
                  collection status blazingly fast.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-primary">
              <Image
                src="/highlight-card-3.png"
                className={classNames("card-img-top", styles.feature)}
                alt="Screenshot of Meeple Party's activity stream"
                width={414}
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">Activity stream</h5>
                <p className="card-text">
                  Instantly see when your friends get a new game or want to play
                  one of your&apos;s.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Instruction heading="Fill your collection" number={1}>
          <p>
            Tell us what games you own. We know, for most people this is
            busywork. But trust us that it will be worth it. Or you can do it
            later, one game at a time. If you already maintain your collection
            on BoardGameGeek you can just import it.
          </p>
        </Instruction>
        <Instruction
          heading="Find your friends and check out their games"
          number={2}
        >
          <p>
            Connect with the people you already know. Meeple Party is not a
            social network like the others, we don&apos;t even want you to
            befriend people you haven&apos;t met. Just fill in the circle of
            friends and acquaintances you already play games with.
          </p>
          <p>
            Then have a look at the games they own and mark every game you want
            to play. Meeple Party will do the rest for you and tell you exactly
            what game that somebody owns enough people in your circle of friends
            want to play.
          </p>
        </Instruction>
        <Instruction heading="Go play some games" number={3}>
          <p>
            Tell your friends you found some matches and fix a date for a game
            night. Everybody can just look up what games to bring.
          </p>
        </Instruction>
      </div>
      <div
        className={classNames("container-fluid pt-4 pb-4", styles.highlight)}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Pricing</h2>
              <p>
                Meeple Party is currently free and there will always be a free
                version available. We may however add a premium account system
                one day but we swear no features you currently have will be
                taken away from you in the process.
              </p>
            </div>
            <div className="col-md-6">
              <h2>Free and open-source</h2>
              <p>
                Meeple party is free and open-source and will always remain so.
                Every new feature will always be added to the main project.
                There will be no closed-source additions and you will always be
                free to host your own version of Meeple Party with all the
                features without paying us a dime.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Everybody is welcome</h2>
              <p>
                Gaming is for everybody and Meeple Party is for everybody. We
                pledge to protect vulnerable and marginalized people as best as
                we can. We expect everybody to demonstrate empathy and kindness
                and will never tolerate harassment, insults, hate speech or
                behaviour that endangers others.
              </p>
            </div>
            <div className="col-md-6">
              <h2>Transparency</h2>
              <p>
                We try to run and develop Meeple Party as openly as is feasible
                and include the community on every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type InstructionProps = PropsWithChildren<{ number: number; heading: string }>;
function Instruction({ number, heading, children }: InstructionProps) {
  return (
    <div className="row mt-4">
      <div className={classNames("col-md-1", styles.number)}>
        <i className={`bi bi-${number}-circle-fill`}></i>
      </div>
      <div className={classNames("col", styles.instruction)}>
        <h3 className={classNames(styles.instructionTitle)}>{heading}</h3>
        {children}
      </div>
    </div>
  );
}
