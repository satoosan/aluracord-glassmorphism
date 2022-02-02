import { Box, Button, Text, TextField, Image, Icon } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router'
import appConfig from '../config.json';



function Title(props){

    const Tag = props.tag || 'h1';

    return (
        <>
        <Tag>{props.children}</Tag>
        <style jsx>
            {`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}
        </style>
        </>
    );
}

// Componente React
// function HomePage() {
//     // JSX
//     return(
//         <div>
//             <GlobalStyle/>
//             <Title tag="h2">Boas vindas de volta!</Title>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     ) 
// }
  
//   export default HomePage

export default function PaginaInicial() {
    // const username = 'omariosouto';
    const [github, setGithub] = React.useState('');
    const [username, setUserName] = React.useState('omariosouto');  
    const roteamento = useRouter();

    React.useEffect(() => {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setGithub(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, [username]);

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'appConfig.theme.colors.primary[500]',
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/897304698468565022/937828890259382363/Pngtreeabstract_polygonal_space_low_poly_1178266.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '10px', padding: '32px', margin: '16px',
              boxShadow: '0 8px 32px 0 rgba( 255, 255, 255, 0.1 )',
              backgroundColor: appConfig.theme.colors.neutrals[700],
              background: 'rgba( 255, 255, 255, 0.01 )',
              backdropFilter: 'blur( 20px )',
              webkitBackdropFilter: 'blur( 20px )',
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (e){
                e.preventDefault();
                roteamento.push(`/chat?username=${username}`);
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text styleSheet={{fontSize: '25px', color: appConfig.theme.colors.neutrals['000']}}>{github.name == null ? "" : `${github.name}` }</Text>
              <Text variant="body3" styleSheet={{ marginTop: '15px' ,marginBottom: '30px', color: appConfig.theme.colors.neutrals['300'] }}>
                {appConfig.name}
              </Text>
              

              {/* <input 
                type="text"
                value={username}
                onChange={function (e){
                    // Trocar o valor da variavel
                    const valor = e.target.value;
                    setUserName(valor);
                }}
              /> */}

              <TextField
                value={username}
                onChange={function (e){
                    // Trocar o valor da variavel
                    const valor = e.target.value;
                    setUserName(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals['000'],
                    mainColorHighlight: 'rgba( 255, 255, 255, 0.2 )',
                    backgroundColor: 'rgba( 255, 255, 255, 0.1 )',
                    backdropFilter: 'blur( 20px )',
                    webkitBackdropFilter: 'blur( 20px )',
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: 'rgba( 255, 255, 255, 0.1 )',
                  mainColorLight: 'rgba( 255, 255, 255, 0.1 )',
                  mainColorStrong: 'rgba( 0, 0, 0, 0.5 )',
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                borderRadius: '10px', padding: '32px', margin: '16px',
                boxShadow: '0 8px 32px 0 rgba( 255, 255, 255, 0.1 )',
                backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
                background: 'rgba( 0, 0, 0, 0.20 )',
                backdropFilter: 'blur( 2.5px )',
                webkitBackdropFilter: 'blur( 2.5px )',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals['000'],
                  fontSize: '18px',
                  padding: '3px 10px',
                  borderRadius: '10px',
                  boxShadow: '0 8px 32px 0 rgba( 0, 0, 0, 0.9 )',
                  backgroundColor: appConfig.theme.colors.neutrals[700],
                  background: 'rgba( 0, 0, 0, 0.7 )',
                  backdropFilter: 'blur( 20px )',
                  webkitBackdropFilter: 'blur( 20px )',
                }}
              >
                {username}
              </Text>
              <Text
                variant="body5"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals['000'],
                  textAlign: 'center',
                  marginTop: '10px',
                  padding: '5px 10px',
                  fontSize: '16px',
                }}
              > 

                {username.length <= 0 || github.followers == null ? "" : <i className="fas fa-user-friends"></i>}
                {username.length <= 0 || github.followers == null ? "" : ` ${github.followers}`}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }