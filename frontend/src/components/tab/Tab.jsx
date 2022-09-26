import React from "react";

const Tab = (props) => {
    const tabName = props.tab.tabName;
    const on = props.tab.on;
    const tabId = props.tab.id;

    const changeTab = (id) => {
        document.querySelector('.tabList li a.on').classList.remove('on');
        document.querySelector('.tabList li a#' + id).classList.add('on');
    };

    return (
        <li>
            <a href="#"
                id={tabId}
                className={on ? 'on' : ''}
                onClick={() => changeTab(tabId)}>
                <span>{tabName}</span>
            </a>
        </li>
    );
};

const TabList = () => {
    const tabList = [
        {tabName: '뉴스', id: 'news', on: true},
        {tabName: '도서', id: 'book'}
    ];

    return (
        <div className="tabBox">
            <ul className="tabList" role="tablist">
            {
                tabList.map((v, inx) => {
                    return <Tab key={inx} tab={v} />
                })
            }
            </ul>
        </div>
    )
};

export default TabList;