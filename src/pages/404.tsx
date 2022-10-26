import Image from 'next/image'
import styles from '../../styles/404.module.scss'
import logoLoginImg from '../../public/LogoOficina.png'
import Head from '../../node_modules/next/head'
import Link from '../../node_modules/next/link'


export default function NotFound(){

   return(
      <>
      <Head>
         <title>404 não existe - Blog Oficina Mecânica Online</title>
      </Head>
      <div className={styles.containerCenter}>
         <Image src={logoLoginImg} width={440} height={150} alt="Logo Oficina Mecanica Online" />

         <div className={styles.login}>
            <h1>DESCULPE ESSA PÁGINA NÃO EXISTE!!!</h1>
            <Link href="/">
                <a>Clique aqui para retornar a página de inicio</a>
            </Link>
         </div>

      </div>
      </>
   )
}