import { Box } from '@skynexui/components';
import React from 'react';

// pages/404.js
export default function Error404(){
    return (
        <>
            <Box
                styleSheet={{
                    backgroundColor: 'appConfig.theme.colors.primary[500]',
                    backgroundImage: 'url(https://cdn.discordapp.com/attachments/897304698468565022/938205232435953678/404_Error_with_a_cute_animal-rafiki.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                }}
            ></Box>
            
        </>
    );
}