import { useRef, useState } from 'react';
import { useMarcas, useMarcasCreate, useMarcasDestroy } from '../../hooks/useMarcas';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { confirmDialog } from 'primereact/confirmdialog';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';
        
import { useForm } from 'react-hook-form';
import { Toast } from 'primereact/toast';

const DashboardBrands = () => {
    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const { data: marcas, isLoading } = useMarcas();
    const { mutateAsync: create } = useMarcasCreate();
    const { mutateAsync: destroy } = useMarcasDestroy();

    const { 
        register: registerCreate, 
        handleSubmit: handleSubmitCreate
    } = useForm();

    const createBrand = (data) => {
        create(data, {
            onSuccess: () => {
                setVisibleCreate(false);
            }
        });
    }

    const toast = useRef(null);

    const deleteBrand = (id) => {
        destroy(id, {
            onSuccess: () => {
                toast.current.show({ 
                    severity: 'success', 
                    summary: 'Aviso', 
                    detail: 'Esta marca foi deletada', 
                    life: 3000 
                });
            }
        });
    }

    const confirmDelete = (id) => {
        confirmDialog({
            message: 'Você deseja realmente excluir esta marca?',
            header: 'Aviso',
            icon: 'pi pi-exclamation-triangle',
            accept: () => deleteBrand(id),
            acceptLabel: 'Sim',
            rejectLabel: 'Não'
        });
    };

    return (
        <div className={'p-6 w-full'}>
            <h1 className={'flex justify-content-between align-items-center mb-3'}>
                {'Marcas'}
                <Button
                    label={'Nova marca'}
                    className={'text-sm uppercase font-bold'}
                    icon={'pi pi-plus'}
                    size={'large'}
                    onClick={() => setVisibleCreate(true)}
                />
            </h1>

            <DataTable
                value={marcas}
                loading={isLoading}
            >
                <Column 
                    header={'id'}
                    field={'id'}
                    headerClassName={'uppercase w-3rem'}
                    bodyClassName={'text-sm'}
                />
                <Column 
                    header={'marca'}
                    field={'nome'}
                    headerClassName={'uppercase'}
                    bodyClassName={'text-sm'}
                />
                <Column 
                    header={'ações'}
                    headerClassName={'uppercase w-2'}
                    body={(rowData) => (
                        <div className={'flex gap-3'}>
                            <Button
                                icon={'pi pi-pencil'}
                                rounded
                                onClick={() => setVisibleEdit(true)}
                            />
                            <Button
                                icon={'pi pi-trash'}
                                rounded
                                onClick={() => confirmDelete(rowData.id)}
                            />
                        </div>
                    )}
                />
            </DataTable>

            <Sidebar
                visible={visibleCreate}
                onHide={() => setVisibleCreate(false)}
                position={'right'}
                className={''}
            >
                <form onSubmit={handleSubmitCreate(createBrand)}>
                    <h3 className={'mb-3'}>
                        {'Criar'}
                    </h3>
                    <label 
                        className={'block mb-2 uppercase font-bold text-sm'}
                    >
                        {'Marca'}
                    </label>
                    <InputText
                        className={'w-full mb-3'}
                        placeholder={'Nome da marca'}
                        {...registerCreate('nome', {required: true})}
                    />
                    <Button 
                        label={'Salvar'}
                        className={'w-full'}
                    />
                </form>
            </Sidebar>
            <Sidebar
                visible={visibleEdit}
                onHide={() => setVisibleEdit(false)}
                position={'right'}
                className={''}
            >
                <form>
                    <h3 className={'mb-3'}>
                        {'Editar'}
                    </h3>
                    <label 
                        className={'block mb-2 uppercase font-bold text-sm'}
                    >
                        {'Marca'}
                    </label>
                    <InputText
                        className={'w-full mb-3'}
                        placeholder={'Nome da marca'}
                        required
                    />
                    <Button 
                        label={'Salvar'}
                        className={'w-full'}
                    />
                </form>
            </Sidebar>
            <Toast ref={toast} />
            <ConfirmDialog />
        </div>
    );
}

export default DashboardBrands;
