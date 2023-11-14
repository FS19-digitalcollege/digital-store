import { styled } from 'styled-components';

const ListarProdutos = () => {
    return (
        <>
            <ListarProdutosContainer>
                <ListarProdutosFilter>
                    <h5>Filtrar por</h5>
                    <hr />
                    <h6>Marca</h6>
                    <ul>
                        <li>
                            <label htmlFor="marca1">
                                <input id='marca1' type="checkbox" />
                                <span></span>
                                Adiddas
                            </label>
                        </li>
                        <li>
                            <label htmlFor="marca2">
                                <input id='marca2' type="checkbox" />
                                <span></span>
                                Calenciaga
                            </label>
                        </li>
                        <li>
                            <label htmlFor="marca2">
                                <input id='marca2' type="checkbox" />
                                <span></span>
                                Calenciaga
                            </label>
                        </li>
                        <li>
                            <label htmlFor="marca2">
                                <input id='marca2' type="checkbox" />
                                <span></span>
                                Calenciaga
                            </label>
                        </li>
                        <li>
                            <label htmlFor="marca2">
                                <input id='marca2' type="checkbox" />
                                <span></span>
                                Calenciaga
                            </label>
                        </li>
                    </ul>
                    <h6>Categoria</h6>
                    <ul>
                        <li>
                            <label htmlFor="marca1">
                                <input id='marca1' type="checkbox" />
                                <span></span>
                                Adiddas
                            </label>
                        </li>
                        <li>
                            <label htmlFor="marca2">
                                <input id='marca2' type="checkbox" />
                                <span></span>
                                Calenciaga
                            </label>
                        </li>
                        <li>
                            <label htmlFor="marca2">
                                <input id='marca2' type="checkbox" />
                                <span></span>
                                Calenciaga
                            </label>
                        </li>
                        <li>
                            <label htmlFor="marca2">
                                <input id='marca2' type="checkbox" />
                                <span></span>
                                Calenciaga
                            </label>
                        </li>
                        <li>
                            <label htmlFor="marca2">
                                <input id='marca2' type="checkbox" />
                                <span></span>
                                Calenciaga
                            </label>
                        </li>
                    </ul>
                </ListarProdutosFilter>
                <ListarProdutosList>Lista</ListarProdutosList>
            </ListarProdutosContainer>
        </>
    )
}

const ListarProdutosContainer = styled.div`
    background-color: #F5F5F5;
    padding: 40px 100px;
    display: flex;
    gap: 28px;
`;

const ListarProdutosFilter = styled.div`
    width: 310px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 30px;
    & ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    & ul li label{
        height: 22px;
        display: flex;
        align-items: center;
        gap: 10px;
        & input{
            width: 22px;
            height: 22px;
            opacity: 0;
            &:checked + span{
                background-color: #C92071;
                border-color: #C92071;
            }
        }
        & span{
            width: 22px;
            height: 22px;
            border: 1px solid #666666;
            border-radius: 2px;
            position: absolute;
            &::after{
                content: "";
                width: 12px;
                height: 6px;
                border-left: 2px solid #FFFFFF;
                border-bottom: 2px solid #FFFFFF;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -65%) rotate(-45deg);
            }
        }
    }
`;

const ListarProdutosList = styled.div`
    flex: 1;
`;

export default ListarProdutos;