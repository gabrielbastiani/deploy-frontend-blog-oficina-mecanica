import React from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import styles from './styles.module.scss'


export function Ads() {

   return (
      <>
         <div className={styles.boxAds}>
            <Link href={"https://go.hotmart.com/H75893038U"}>
                  <Image className={styles.banner} src="/Curso-de-programacao.png" width={260} height={200} alt="dankicode" />
            </Link>
         </div>
      </>
   )
}