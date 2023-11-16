import { useState } from "react";
import styles from "./style.module.css";

const FooterX = () => {
  const [isFooterX, setIsFooterX] = useState(true);
  return (
    <>
      <button onClick={() => setIsFooterX(!isFooterX)}>Click</button>
      {isFooterX && (
        <footer className={styles.footer}>
          <spam>&#169; xxxxxxxxxxxxxxxx</spam>
        </footer>
      )}
    </>
  );
};
export default FooterX;
