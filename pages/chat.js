import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

    /*
    // Usuário
    - Usuário digita no campo textarea
    - Aperta enter para enviar
    - Tem que adicionar o texto na listagem
    
    // Dev
    - [X] Campo criado
    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
    - [X] Lista de mensagens 
    */
    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length + 1,
            de: 'vanessametonini',
            texto: novaMensagem,
        };

        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens,
        ]);
        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: 'url(https://cdn.discordapp.com/attachments/897304698468565022/937828890259382363/Pngtreeabstract_polygonal_space_low_poly_1178266.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    boxShadow: '0 8px 32px 0 rgba( 255, 255, 255, 0.1 )',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    background: 'rgba( 255, 255, 255, 0.01 )',
                    backdropFilter: 'blur( 20px )',
                    webkitBackdropFilter: 'blur( 20px )',
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        background: 'rgba( 0, 0, 0, 0.1 )',
                        backdropFilter: 'blur( 20px )',
                        webkitBackdropFilter: 'blur( 20px )',
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                    <MessageList 
                    mensagens={listaDeMensagens} />
                    {/* {listaDeMensagens.map((mensagemAtual) => {
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )
                    })} */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value;
                                setMensagem(valor);
                            }}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                // backgroundColor: appConfig.theme.colors.neutrals[800],
                                backgroundColor: appConfig.theme.colors.neutrals[600],
                                background: 'rgba( 0, 0, 0, 5 )',
                                backdropFilter: 'blur( 20px )',
                                webkitBackdropFilter: 'blur( 20px )',
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                            
                        />
                    <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label=''
                    onClick={()=>{
                        handleNovaMensagem(mensagem);
                    }}
                    className="fas fa-paper-plane"
                    styleSheet={{
                        position: 'absolute',
                        right: '30px',
                        hover:{
                        backgroundColor : 'rgba( 5, 5, 5, 9 )',
                        }
                    }}
                    />
                    
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'
                    styleSheet={{
                        fontSize: '25px'
                    }}
                >
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                    styleSheet={{
                        hover:{
                            backgroundColor: 'rgba( 8, 8, 8, 9 )',
                        }
                    }}
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
            className="scrollbar"
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            //backgroundColor: appConfig.theme.colors.neutrals[700],
                            backgroundColor: appConfig.theme.colors.neutrals[600],
                            background: 'rgba( 0, 0, 0, 0.1 )',
                            backdropFilter: 'blur( 20px )',
                            webkitBackdropFilter: 'blur( 20px )',
                            hover: {
                                backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                display: 'block',
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    display: 'inline',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/vanessametonini.png`}
                            />
                            <Text tag="strong"
                            styleSheet={{display: 'inline'}}
                            >
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    
                                    display: 'inline',
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {
                        mensagem.texto
                        }
                    </Text>
                );
            })}
        </Box>
    )
}