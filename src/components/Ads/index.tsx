import React from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import styles from './styles.module.scss'


export function Ads() {

   return (
      <>
         <div className={styles.boxAds}>
            <Link href={"https://treinamentoautomotivo.com/manual-de-reparo-em-modulos/?ref=R11990219E&hsrc=cm9kYXBl"}>
                  <Image className={styles.banner} src="/reparo-modulo-injecao.png" width={260} height={200} alt="dankicode" />
            </Link>
         </div>
      </>
   )
}