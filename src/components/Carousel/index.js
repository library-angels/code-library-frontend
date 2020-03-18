import React ,{useState}from 'react';
import { Box, Flex, Image, Collapse, Button } from '@chakra-ui/core';
import data from '../../LibTestApi/LibTestApiJson.json';

function Carousel(props) {
    const NewData = data.slice(0, 4);

    const URL = 'https://library.code.berlin/';
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <div >
            <Box fontWeight={'bold'} m={[2]} >{ props.title}</Box>
            <Collapse id="wail" startingHeight={"200px"}  endingHeight ={400} isOpen={show}>
                <Flex  maxW={'980px'}  align="center" justify="center" m={[2]}>
                    {NewData.map(book => {
                        return (
                            <Flex key={book.id} m={[2]} width={'25%'}  >
                                <Flex  width={'100%'}  >
                                    <Image 
                                    maxW={ '100%'} 
                                    maxH={'140px'}
                                    src={URL + book.cover}
                                    boxShadow="   0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                                                    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                                                    0 12.5px 10px rgba(0, 0, 0, 0.06),
                                                    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                                                    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                                                    0 100px 80px rgba(0, 0, 0, 0.12)" 
                                    />
                                </Flex>
                            </Flex>
                        );
                    })}
                </Flex>
                <Flex flexDirection='row-reverse'>
                <Button  size="sm" variant="solid" onClick={handleToggle} >
                    Show {show ? "Less" : "More"}
                </Button>
                </Flex>
            </Collapse>
        </div>
    );
}

export default Carousel;
