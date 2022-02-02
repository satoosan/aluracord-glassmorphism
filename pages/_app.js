function GlobalStyle() {
    return (
      <>
      <style global jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,600;0,700;1,500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Poppins', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        ::-webkit-scrollbar-track {
          background-color: transparent;
        }
        ::-webkit-scrollbar {
            width: 10px;
            background: transparent;
        }
        ::-webkit-scrollbar-button{
          background-color: transparent;
        }
        ::-webkit-scrollbar-track-piece{
          background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 115px;
            background: #fff;
        }
        ::-webkit-scrollbar-button{
          background: transparent;
        }
        ::-webkit-scrollbar-corner{
          background: transparent;
        }
        /* ./App fit Height */ 
      `}</style>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
      </>
    );
  }

export default function MyApp({ Component, pageProps }){
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </>
    )
}