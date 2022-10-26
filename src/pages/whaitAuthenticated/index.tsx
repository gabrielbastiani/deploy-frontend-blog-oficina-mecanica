import { canSSRGuest } from '../../utils/canSSRGuest'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../login/styles.module.scss'
import logoLoginImg from '../../../public/LogoOficina.png'


export default function WhaitAuthenticated(){

   return(
      <>
      <Head>
         <title>Blog Oficina Mecânica Online</title>
      </Head>
      <div className={styles.containerCenter}>
         <Image src={logoLoginImg} width={440} height={150} alt="Logo Oficina Mecanica Online" />

         <div className={styles.login}>
            <h1>ACESEE SUA CAIXA DE E-MAIL</h1>
            <p>Lá você vai encontrar um email onde terá que autenticar seu cadastro.</p>
         </div>

      </div>
      </>
   )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
   return {
     props: {}
   }
 })