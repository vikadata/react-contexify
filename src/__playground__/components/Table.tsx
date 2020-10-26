import React, { MouseEvent } from 'react';
import { contextMenu } from '../../utils/contextMenu';

export default ({
  event,
  handleEvent
}: {
  event: string;
  handleEvent: (e: MouseEvent<HTMLTableElement>) => void;
}) => {
  const table = [];
  const range = Array.from(Array(5).keys());
  for (let index = 0; index < 10; index++) {
    table.push(
      <tr key={index}>
        {range.map(k => (
          <td key={k} {...{ [`${event}`]: handleEvent }} />
        ))}
      </tr>
    );
  }

  function onClick (e:React.MouseEvent) { 
    contextMenu.show({
      id: '1',
      event: e,
      props: {
        name:'su'
      }
    })
  }

  return (
    <div>
      <span onContextMenu={onClick}>
      This is a table
      </span>
      <table className="grid">
        <tbody>{table}</tbody>
      </table>
    </div>
  );
};
