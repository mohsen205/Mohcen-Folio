import Head from 'next/head'
const Header = ({ title }) => {
    return (
        <Head>
            <meta name="description" content="Hi i'm Mohcen , I'm a front end web designer/developer , skilled in Html , CSS ,JavaScript  ,react and Nextjs . I create clean , Porffesional , functional website" />
            <meta name="keywords" content="HTML, CSS, JavaScript web, next , react , mohcen , freelancer , web develempent ,
            web site , person for create website " />
            <title> {!title ? "M-Folio" : `M-Folio | ${title}`} </title>
        </Head>
    )
}

export default Header

