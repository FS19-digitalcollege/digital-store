import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const DashboardHeader = () => {
    return (
        <HeaderContainer
        className={'w-2 h-screen flex flex-column justify-content-start align-items-start p-3 bg-black-alpha-90'}>
            <h1>LOGO</h1>
            <ul className={'mt-3'}>
                <li>
                    <NavLink 
                        className={'flex gap-3 align-items-center py-3'}
                        to={'/dashboard'}>
                        <i className={'pi pi-home'}></i>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={'flex gap-3 align-items-center py-3'} 
                        to={'/dashboard/brands'}>
                        <i className={'pi pi-tags'}></i>
                        Marcas
                    </NavLink>
                </li>
                <li>
                    <Link to={'/dashboard/categories'}>Categorias</Link>
                </li>
                <li>
                    <Link to={'/dashboard/genders'}>Gêneros</Link>
                </li>
            </ul>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    & ul li a{
        color: #FFFFFF;
    }
    & ul li a.active{
        color: #C92071;
    }
`;

export default DashboardHeader;