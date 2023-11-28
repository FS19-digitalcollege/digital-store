import { Button } from 'primereact/button';
const Dashboard = () => {
    return (
        <div className={'p-6 w-full'}>
            <h1 className={'flex justify-content-between'}>
                Dashboard
                <Button
                    label={'Nova marca'}
                    className={'text-sm uppercase font-bold'}
                    icon={'pi pi-plus'}
                    size={'large'}
                />
            </h1>
        </div>
    );
}

export default Dashboard;