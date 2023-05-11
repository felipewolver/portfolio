
import { MdPerson, MdSearch, MdMail, MdPhone  } from 'react-icons/md';

import { 
    Title, 
    ContactContent, 
    ContactColumnLeft, 
    ContactIcon, 
    ContactRow,
    ContactInfo, 
    ContactColumnRight,
    ContactFields,
    ContactFieldName,
    Footer   } from './styles.js';

export default function Contact() {

    return (
        <>
            <Title id="contact"> Contato  </Title>
            <ContactContent>
                   
                <ContactColumnLeft>
                    <ContactIcon>
                           <ContactRow>
                                <MdPerson color='#146C94' size={30} />

                                <ContactInfo>
                                    <div> Nome </div>
                                    <div> Felipe Ferreira de Oliveira </div>

                                </ContactInfo>
                           </ContactRow>

                           <ContactRow>
                                <MdSearch color='#146C94' size={30} />

                                <ContactInfo>
                                    <div> Endereço </div>
                                    <div> Belford roxo - RJ </div>

                                </ContactInfo>
                           </ContactRow>

                           <ContactRow>
                                <MdMail color='#146C94' size={25} />

                                <ContactInfo>
                                    <div> Email </div>
                                    <div> felipeferreira_811@hotmail.com </div>

                                </ContactInfo>
                           </ContactRow>

                           <ContactRow>
                                <MdPhone color='#146C94' size={25} />

                                <ContactInfo>
                                    <div> Telefone </div>
                                    <div> (21)982065489 </div>

                                </ContactInfo>
                           </ContactRow>

                    </ContactIcon>

                </ContactColumnLeft>

                <ContactColumnRight>
                    <div className='text'> Mensagem... </div>
                    
                    <form>
                        <ContactFields>
                            <ContactFieldName>
                                <input type='text' placeholder='Nome' required />

                            </ContactFieldName>

                            <ContactFieldName>
                                <input type='text' placeholder='Email' required />

                            </ContactFieldName>

                        </ContactFields>

                        <ContactFieldName>
                            <div>
                                <input type='text' placeholder='Sobrenome' required />

                            </div>

                            <div>
                                <textarea cols='30' rows='5' placeholder='Escrever...' > </textarea>
                            </div>

                            <div className='button'>
                                <button type='submit' > Enviar </button>
                            </div>
                                
                        </ContactFieldName>

                    </form>

                </ContactColumnRight>

            </ContactContent>

            <Footer>
                <span> Desenvolvido em React por Felipe Ferreira - Todos os direitos reservado 2023  </span>
            </Footer>
        </>
    );
}