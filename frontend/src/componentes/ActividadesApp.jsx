import React from "react";
import { SelectUsuario } from './SelectUsuario';
import { ActBuscar } from './ActBuscar';
import { ActLista } from './ActLista';
import { ActCreateButton } from './ActCreateButton';
import { ActItem } from './ActItem';
import { ActResumen } from './ActResumen';

function ActividadesApp({listUsuarios,listActividades}) {


    return (
        <React.Fragment>
            <SelectUsuario usuario1={listUsuarios[0]} />
            <ActResumen totales={5} completadas={1} />
            <ActBuscar />

            <ActLista>
                {listActividades.map(act => (
                    <ActItem
                        key={act.text}
                        text={act.text}
                        completed={act.completed}
                    />
                ))}

            </ActLista>

            <ActCreateButton />
        </React.Fragment>
    )
}

export {ActividadesApp};