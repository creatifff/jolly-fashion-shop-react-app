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