import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                {/* FIXME    */}
                <script src="../static/libs/jquery/dist/jquery.min.js"></script>
                {/* <script src="../static/libs/remodal/dist/remodal.min.js"></script> */}
                <script src="../static/scripts.min.js"></script>
            </html>
        )
    }
}