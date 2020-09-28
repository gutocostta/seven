import React from 'react';
import RenderItens from './RenderItens';
import StableList from 'react-stablelist';


const propProvider = (key, index, isFresh, isFirstRender, propData) => {
  return {
    key,
    index: index,
    content: propData,
  };
};


export default function ListView({data, more}) {
  return (
    <>
      <div>
        <StableList
          data={data}
          dataKey={Math.random()}
          component={RenderItens}
          maxItems={20}
          threshold={more}
          itemCount={data.length}
          propProvider={propProvider}
        />
      </div>
    </>
  );
}
