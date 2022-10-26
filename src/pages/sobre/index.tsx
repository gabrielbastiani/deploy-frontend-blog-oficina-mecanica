import Head from '../../../node_modules/next/head'
import { FooterBlog } from '../../components/FooterBlog/index'
import { HeaderBlog } from '../../components/HeaderBlog/index'
import styles from './styles.module.scss'
import { BsWhatsapp } from 'react-icons/bs'
import Link from '../../../node_modules/next/link'
import Image from '../../../node_modules/next/image'



export default function Sobre() {

   return (
      <>
         <Head>
            <title>Sobre - Blog Oficina Mecânica Online</title>
         </Head>
         <main>

            <HeaderBlog />

            <section className={styles.userSection}>
               <div className={styles.userBox}>

               <Image src="/gabriel.png" width={220} height={200} alt="gabriel de bastiani" />

                  <h1>Gabriel Campos de Bastiani</h1>

                  <div className={styles.userDescription}>
                     <p>
                        Me chamo Gabriel Campos de Bastiani, formado em Técnico Automotivo pelo SENAI da cidade de Caxias do Sul-RS; Junto ao conhecimento obtido no SENAI, gostaria de compartilhar esse conhecimento junto a todos que se interessam pelo negócio.
                     </p>

                     <Link className={styles.whatsButton} href={`https://api.whatsapp.com/send?phone=5554996860104`}>
                        <span><BsWhatsapp size={30} color="green" />Entre em contato comigo! (54)99686-0104</span>
                     </Link>

                  </div>
               </div>
            </section>

         </main>
         <FooterBlog />
      </>
   )
}