import React from 'react';

type propsType = {
}

const Hello: React.FC<propsType>  = () => {
 return (
     <h1 className="text-3xl font-bold underline bg-emerald-300">
         Hello world!
     </h1>
 );
};

export default Hello;