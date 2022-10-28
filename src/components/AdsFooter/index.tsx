import React from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import styles from './styles.module.scss'


export function AdsFooter() {

   return (
      <>
         <div className={styles.boxAdsFooter}>
            <Link href={"https://treinamentoautomotivo.com/manual-de-reparo-em-modulos/?ref=R11990219E&hsrc=cm9kYXBl"}>
                  <Image className={styles.banner} src="/reparo-modulo-injecao.png" width={890} height={500} alt="reparo-de-modulo-de-injecao-eletronica" />
            </Link>
         </div>
      </>
   )
}