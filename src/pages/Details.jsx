import React from 'react';
import { Params, useParams } from 'react-router-dom';

function Details() {

    const {name} = useParams();    // сделаем проверку, в пропы достанем объект mutch
    return (
        <div>
            Details {name}
        </div>
    );
}

export {Details};