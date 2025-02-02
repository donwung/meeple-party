"use client";

import classNames from "classnames";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { useCallback } from "react";
import styles from "./providerbutton.module.css";

interface ProviderButtonProps {
  provider: ClientSafeProvider;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({ provider }) => {
  const login = useCallback(() => {
    signIn(provider.id).catch((error) => console.error(error));
  }, [provider]);

  return (
    <div className="row mb-2 justify-content-center">
      <div className="col-md-2 d-grid">
        <button
          type="button"
          className={classNames(
            "btn",
            styles.button,
            styles[provider.id] || "btn-primary"
          )}
          onClick={login}
        >
          <>
            <div className={styles.icon}>{getIcon(provider.id)}</div>
            <div className={styles.text}>{provider.name}</div>
          </>
        </button>
      </div>
    </div>
  );
};

export default ProviderButton;

function getIcon(id: string) {
  switch (id) {
    case "google":
      return <i className="bi bi-google"></i>;
    case "github":
      return <i className="bi bi-github"></i>;
    case "discord":
      return <i className="bi bi-discord"></i>;
    case "twitch":
      return <i className="bi bi-twitch"></i>;
    default:
      return <></>;
  }
}
