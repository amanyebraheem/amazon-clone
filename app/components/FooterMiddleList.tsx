

'use client';

import React from 'react';

interface Props {
  title: string;
  listItem: {
    _id: string;
    listData: string[];
  }[];
}

const FooterMiddleList = ({ title, listItem }: Props) => {
  return (
    <div>
      <h3 className="font-semibold text-white text-base mb-3">{title}</h3>
      <ul className="flex flex-col gap-0.5">
        {listItem?.map((item) =>
          item?.listData.map((data: string, index: number) => (
            <li key={`${item._id}-${index}`} className="footerlink">
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
