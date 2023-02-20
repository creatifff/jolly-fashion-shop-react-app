export const SearchIcon = ({size = 28, color = "#A2A2A2"}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={color}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
        </svg>
    );
};

export const BagIcon = ({size = 28, color = "#A2A2a2"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className="icon icon-tabler icon-tabler-shopping-bag"
             width={size}
             height={size}
             viewBox="0 0 24 24"
             strokeWidth="2"
             stroke={color}
             fill="none"
             strokeLinecap="round"
             strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
            <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
        </svg>
    )
}

export const TrashIcon = ({size = 28, color = '#a2a2a2'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className="icon icon-tabler icon-tabler-trash-filled"
             width={size}
             height={size}
             viewBox="0 0 24 24"
             strokeWidth="2"
             stroke={color}
             fill={color}
             strokeLinecap="round"
             strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="currentColor"></path>
            <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="currentColor"></path>
        </svg>
    )
}