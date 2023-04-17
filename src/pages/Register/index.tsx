import { Column, Container, SubtitleRegister, Title, TitleRegister, Wrapper, TermsText, LoginText, Row, HrefLogin } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { useForm } from "react-hook-form";
import { MdEmail, MdPerson, MdLock } from 'react-icons/md'
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData: any) => {
        const {data} = await api.post('/users', formData)
        
        if(data.id){
            navigate("/feed")
        }
    }

 return (
    <>
        <Header autenticado={false}/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as 
                    principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegister>
                        Comece agora grátis.
                    </TitleRegister>
                    <SubtitleRegister>
                        Crie sua conta e make the change._
                    </SubtitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input leftIcon={<MdPerson color="#cb00fe"/>} name="name" placeholder="Nome Completo" control={control}/>
                        {errors.name && <span>Nome é obrigatório</span>}
                        <Input leftIcon={<MdEmail color="#cb00fe"/>} name="email" placeholder="E-mail" control={control}/>
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input leftIcon={<MdLock color="#cb00fe"/>} type="password" name="password" placeholder="Senha" control={control}/>
                        {errors.password && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="secondary"/>
                    </form>
                    <TermsText>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Politicas de Privacidade e os Termos de Uso da DIO.
                    </TermsText>
                    <Row>
                        <LoginText>
                            Já tenho conta. 
                        </LoginText>
                        <HrefLogin href="/login">
                            Fazer Login
                        </HrefLogin>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
 )
}

export { Register }