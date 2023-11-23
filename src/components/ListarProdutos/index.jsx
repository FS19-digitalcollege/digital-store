import { styled } from 'styled-components';
import { useMarcas } from '../../hooks/useMarcas';
import { useCategorias } from '../../hooks/useCategorias';
import { useGeneros } from '../../hooks/useGeneros';
import { useEstados } from '../../hooks/useEstados';

const ListarProdutos = () => {

    const { data: dataMarcas, isLoading: isLoadingMarcas } = useMarcas();
    const { data: dataCategorias, isLoading: isLoadingCategorias } = useCategorias();
    const { data: dataGeneros, isLoading: isLoadingGeneros } = useGeneros();
    const { data: dataEstados, isLoading: isLoadingEstados } = useEstados();

    return (
        <>
            <ListarProdutosContainer>
                <ListarProdutosFilter>
                    <h5>Filtrar por</h5>
                    <hr />
                    <h6>Marca</h6>
                    <ul>
                        {
                            isLoadingMarcas || dataMarcas.map(m => (
                                <li key={m.id}>
                                    <label htmlFor={`marca${m.id}`}>
                                        <input id={`marca${m.id}`} type="checkbox" />
                                        <span></span>
                                        {m.nome}
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                    <h6>Categoria</h6>
                    <ul>
                        {
                            isLoadingCategorias || dataCategorias.map(c => (
                                <li key={c.id}>
                                    <label htmlFor={`categoria${c.id}`}>
                                        <input id={`categoria${c.id}`} type="checkbox" />
                                        <span></span>
                                        {c.nome}
                                    </label>
                                </li>
                            ))
                        }

                    </ul>
                    <h6>Gêneros</h6>
                    <ul>
                        {
                            isLoadingGeneros || dataGeneros.map(m => (
                                <li key={m.id}>
                                    <label htmlFor={`generos${m.id}`}>
                                        <input id={`generos${m.id}`} type="checkbox" />
                                        <span></span>
                                        {m.genero}
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                    <h6>Estados</h6>
                    <ul>
                        {
                            isLoadingEstados || dataEstados.map(e => (
                                <li key={e.id}>
                                    <label htmlFor={`estado${e.id}`}>
                                        <input id={`estado${e.id}`} name="estado" type="radio" value={e.id} />
                                        <span></span>
                                        {e.estado}
                                    </label>
                                </li>
                            ))
                        }
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
        & input[type="checkbox"]{
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