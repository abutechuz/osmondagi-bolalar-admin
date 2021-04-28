function Statistik({ className, width, height }) {
    return (
        <>
            <svg
                className={className}
                width={width ? width : '16'}
                height={height ? height : '16'}
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    opacity='0.4'
                    d='M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z'
                    fill='#9FA2B4'
                />
            </svg>
        </>
    )
}

function Seting({ className }) {
    return (
        <>
            <svg
                className={className}
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    opacity='0.4'
                    d='M15.2313 9.86558L13.9 9.09683C14.0344 8.37183 14.0344 7.62808 13.9 6.90308L15.2313 6.13433C15.3844 6.04683 15.4531 5.86558 15.4031 5.69683C15.0563 4.58433 14.4656 3.57808 13.6938 2.74058C13.575 2.61246 13.3813 2.58121 13.2313 2.66871L11.9 3.43746C11.3406 2.95621 10.6969 2.58433 10 2.34058V0.806206C10 0.631206 9.87814 0.478081 9.70627 0.440581C8.55939 0.184331 7.38439 0.196831 6.29377 0.440581C6.12189 0.478081 6.00002 0.631206 6.00002 0.806206V2.34371C5.30627 2.59058 4.66252 2.96246 4.10002 3.44058L2.77189 2.67183C2.61877 2.58433 2.42814 2.61246 2.30939 2.74371C1.53752 3.57808 0.946895 4.58433 0.60002 5.69996C0.546895 5.86871 0.61877 6.04996 0.771895 6.13746L2.10314 6.90621C1.96877 7.63121 1.96877 8.37496 2.10314 9.09996L0.771895 9.86871C0.61877 9.95621 0.55002 10.1375 0.60002 10.3062C0.946895 11.4187 1.53752 12.425 2.30939 13.2625C2.42814 13.3906 2.62189 13.4218 2.77189 13.3343L4.10314 12.5656C4.66252 13.0468 5.30627 13.4187 6.00314 13.6625V15.2C6.00314 15.375 6.12502 15.5281 6.29689 15.5656C7.44377 15.8218 8.61877 15.8093 9.70939 15.5656C9.88127 15.5281 10.0031 15.375 10.0031 15.2V13.6625C10.6969 13.4156 11.3406 13.0437 11.9031 12.5656L13.2344 13.3343C13.3875 13.4218 13.5781 13.3937 13.6969 13.2625C14.4688 12.4281 15.0594 11.4218 15.4063 10.3062C15.4531 10.1343 15.3844 9.95308 15.2313 9.86558ZM8.00002 10.5C6.62189 10.5 5.50002 9.37808 5.50002 7.99996C5.50002 6.62183 6.62189 5.49996 8.00002 5.49996C9.37814 5.49996 10.5 6.62183 10.5 7.99996C10.5 9.37808 9.37814 10.5 8.00002 10.5Z'
                    fill='#9FA2B4'
                />
            </svg>
        </>
    )
}

function Male({ className }) {
    return (
        <>
            <svg
                width='15'
                height='31'
                viewBox='0 0 15 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M7.5 0C10.2614 0 12.5 1.73491 12.5 3.875C12.5 6.01509 10.2614 7.75 7.5 7.75C4.73859 7.75 2.5 6.01509 2.5 3.875C2.5 1.73491 4.73859 0 7.5 0ZM11.25 8.71875H10.3625C8.5882 9.35104 6.48828 9.37835 4.6375 8.71875H3.75C1.67891 8.71875 0 10.0199 0 11.625V19.8594C0 20.6619 0.839453 21.3125 1.875 21.3125H3.125V29.5469C3.125 30.3494 3.96445 31 5 31H10C11.0355 31 11.875 30.3494 11.875 29.5469V21.3125H13.125C14.1605 21.3125 15 20.6619 15 19.8594V11.625C15 10.0199 13.3211 8.71875 11.25 8.71875Z'
                    fill='#332A7C'
                />
            </svg>
        </>
    )
}
function Female({ className }) {
    return (
        <>
            <svg
                width='15'
                height='25'
                viewBox='0 0 15 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M7.49998 0C9.70891 0 11.4996 1.39912 11.4996 3.125C11.4996 4.85088 9.70891 6.25 7.49998 6.25C5.29105 6.25 3.50033 4.85088 3.50033 3.125C3.50033 1.39912 5.29105 0 7.49998 0ZM14.9545 17.2939L11.9548 7.9189C11.8737 7.66536 11.6864 7.44028 11.4227 7.27945C11.1591 7.11862 10.8342 7.03125 10.4997 7.03125H9.78978C8.37047 7.54116 6.69068 7.56318 5.21018 7.03125H4.50024C4.16575 7.03125 3.84087 7.11862 3.57722 7.27945C3.31358 7.44028 3.12631 7.66536 3.04518 7.9189L0.0454413 17.2939C-0.190913 18.0325 0.524525 18.75 1.5005 18.75H5.0002V23.8281C5.0002 24.4753 5.6717 25 6.50007 25H8.49989C9.32826 25 9.99976 24.4753 9.99976 23.8281V18.75H13.4995C14.4738 18.75 15.1912 18.0336 14.9545 17.2939Z'
                    fill='#F44771'
                />
            </svg>
        </>
    )
}

function User({ className }) {
    return (
        <>
            <svg
                width='22'
                height='24'
                viewBox='0 0 22 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M11 12C14.4719 12 17.2857 9.31406 17.2857 6C17.2857 2.68594 14.4719 0 11 0C7.52812 0 4.71429 2.68594 4.71429 6C4.71429 9.31406 7.52812 12 11 12ZM15.7045 13.5281L13.3571 22.5L11.7857 16.125L13.3571 13.5H8.64286L10.2143 16.125L8.64286 22.5L6.29554 13.5281C2.7942 13.6875 0 16.4203 0 19.8V21.75C0 22.9922 1.0558 24 2.35714 24H19.6429C20.9442 24 22 22.9922 22 21.75V19.8C22 16.4203 19.2058 13.6875 15.7045 13.5281V13.5281Z'
                    fill='#FFA800'
                />
            </svg>
        </>
    )
}

function IconPrev({ className }) {
    return (
        <>
            <svg
                width='8'
                height='14'
                viewBox='0 0 8 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1'
                    stroke='#9FA2B4'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
            </svg>
        </>
    )
}

function IconNext({ className }) {
    return (
        <>
            <svg
                width='8'
                height='14'
                viewBox='0 0 8 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1'
                    stroke='#9FA2B4'
                    strokeWidth='2'
                    strokeLinecap='round'
                />
            </svg>
        </>
    )
}

function FileSvg() {
    return (
        <svg
            width='23'
            height='25'
            viewBox='0 0 23 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0)'>
                <path
                    d='M22.9626 5.85759V6.1416H15.6293V0.141602H15.9764C16.3411 0.141603 16.6908 0.260121 16.9487 0.471086L22.5599 5.06207C22.8178 5.27306 22.9626 5.55921 22.9626 5.85759V5.85759ZM15.171 7.6416C14.4147 7.6416 13.796 7.13535 13.796 6.5166V0.141602H2.33765C1.57825 0.141602 0.962646 0.645273 0.962646 1.2666V23.0166C0.962646 23.6379 1.57825 24.1416 2.33765 24.1416H21.5876C22.347 24.1416 22.9626 23.6379 22.9626 23.0166V7.6416H15.171ZM7.41054 8.3916C8.92934 8.3916 10.1605 9.39895 10.1605 10.6416C10.1605 11.8843 8.92934 12.8916 7.41054 12.8916C5.89174 12.8916 4.66054 11.8843 4.66054 10.6416C4.66054 9.39895 5.89179 8.3916 7.41054 8.3916ZM19.3272 19.6416H4.66054L4.68832 17.3689L6.9522 15.5166C7.22067 15.2969 7.62819 15.3197 7.89666 15.5393L10.1605 17.3916L16.0911 12.5393C16.3596 12.3197 16.7949 12.3197 17.0634 12.5393L19.3272 14.3916V19.6416V19.6416Z'
                    fill='black'
                />
            </g>
            <defs>
                <clipPath id='clip0'>
                    <rect
                        width='22'
                        height='24'
                        fill='white'
                        transform='translate(0.962646 0.141602)'
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

function IconGraph({ className }) {
    return (
        <svg
            className={className}
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M13 13.414C13.1875 13.6016 13.4418 13.7069 13.707 13.707H14.293C14.5582 13.7069 14.8125 13.6016 15 13.414L19.707 8.707L22 11V5H16L18.293 7.293L14 11.586L11 8.586C10.8125 8.39845 10.5582 8.29306 10.293 8.293H9.70697C9.44177 8.29306 9.18746 8.39845 8.99997 8.586L2.29297 15.293L3.70697 16.707L9.99997 10.414L13 13.414Z'
                opacity='0.4'
                fill='#9FA2B4'
            />
        </svg>
    )
}

function IconQuestion({ className }) {
    return (
        <svg
            className={className}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                opacity='0.4'
                d='M12 22C6.47967 21.9939 2.00606 17.5203 2 12V11.8C2.10993 6.30452 6.63459 1.92794 12.1307 2.00087C17.6268 2.07379 22.0337 6.56887 21.9978 12.0653C21.9619 17.5618 17.4966 21.9989 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57928 16.4087 3.99999 11.992 3.99999C7.57528 3.99999 3.99421 7.57928 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM13 18H11V16H13V18ZM13 15H11C10.9684 13.6977 11.6461 12.4808 12.77 11.822C13.43 11.316 14 10.88 14 9.99999C14 8.89542 13.1046 7.99999 12 7.99999C10.8954 7.99999 10 8.89542 10 9.99999H8V9.90999C8.01608 8.48093 8.79333 7.16899 10.039 6.46839C11.2846 5.76778 12.8094 5.78493 14.039 6.51339C15.2685 7.24184 16.0161 8.57093 16 9.99999C15.9284 11.079 15.3497 12.0602 14.44 12.645C13.6177 13.1612 13.0847 14.0328 13 15Z'
                fill='#9FA2B4'
            />
        </svg>
    )
}

function IconOffer({ className }) {
    return (
        <svg
            className={className}
            width='16'
            height='16'
            viewBox='0 0 12 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                opacity='0.4'
                d='M3.50187 14.1985C3.50219 14.395 3.56031 14.5875 3.66937 14.7513L4.20344 15.5541C4.29467 15.6913 4.41841 15.8039 4.56366 15.8817C4.7089 15.9596 4.87114 16.0003 5.03594 16.0003H6.96438C7.12917 16.0003 7.29141 15.9596 7.43665 15.8817C7.5819 15.8039 7.70564 15.6913 7.79688 15.5541L8.33094 14.7513C8.43995 14.5875 8.49822 14.3952 8.49844 14.1985L8.49969 13H3.50031L3.50187 14.1985ZM0.5 5.50003C0.5 6.88659 1.01406 8.15159 1.86125 9.11815C2.3775 9.70721 3.185 10.9378 3.49281 11.976C3.49406 11.9841 3.495 11.9922 3.49625 12.0003H8.50375C8.505 11.9922 8.50594 11.9844 8.50719 11.976C8.815 10.9378 9.6225 9.70721 10.1388 9.11815C10.9859 8.15159 11.5 6.88659 11.5 5.50003C11.5 2.45659 9.02844 -0.00934836 5.98281 2.66431e-05C2.795 0.00971414 0.5 2.59284 0.5 5.50003ZM6 3.00003C4.62156 3.00003 3.5 4.12159 3.5 5.50003C3.5 5.77628 3.27625 6.00003 3 6.00003C2.72375 6.00003 2.5 5.77628 2.5 5.50003C2.5 3.57003 4.07 2.00003 6 2.00003C6.27625 2.00003 6.5 2.22378 6.5 2.50003C6.5 2.77628 6.27625 3.00003 6 3.00003Z'
                fill='#9FA2B4'
            />
        </svg>
    )
}

function IconSpeakers({ className }) {
    return (
        <svg
            className={className}
            width='16'
            height='16'
            viewBox='0 0 14 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                opacity='0.4'
                d='M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.99375 9.01875L8.5 15L7.5 10.75L8.5 9H5.5L6.5 10.75L5.5 15L4.00625 9.01875C1.77812 9.125 0 10.9469 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.9469 12.2219 9.125 9.99375 9.01875Z'
                fill='#9FA2B4'
            />
        </svg>
    )
}

function IconUsers({ className }) {
    return (
        <svg
            className={className}
            width='16'
            height='16'
            viewBox='0 0 16 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                opacity='0.4'
                d='M2.4 5.20002C3.2825 5.20002 4 4.48252 4 3.60002C4 2.71752 3.2825 2.00002 2.4 2.00002C1.5175 2.00002 0.8 2.71752 0.8 3.60002C0.8 4.48252 1.5175 5.20002 2.4 5.20002ZM13.6 5.20002C14.4825 5.20002 15.2 4.48252 15.2 3.60002C15.2 2.71752 14.4825 2.00002 13.6 2.00002C12.7175 2.00002 12 2.71752 12 3.60002C12 4.48252 12.7175 5.20002 13.6 5.20002ZM14.4 6.00002H12.8C12.36 6.00002 11.9625 6.17753 11.6725 6.46502C12.68 7.01753 13.395 8.01503 13.55 9.20003H15.2C15.6425 9.20003 16 8.84253 16 8.40003V7.60003C16 6.71753 15.2825 6.00002 14.4 6.00002ZM8 6.00002C9.5475 6.00002 10.8 4.74752 10.8 3.20002C10.8 1.65252 9.5475 0.400024 8 0.400024C6.4525 0.400024 5.2 1.65252 5.2 3.20002C5.2 4.74752 6.4525 6.00002 8 6.00002ZM9.92 6.80002H9.7125C9.1925 7.05002 8.615 7.20003 8 7.20003C7.385 7.20003 6.81 7.05002 6.2875 6.80002H6.08C4.49 6.80002 3.2 8.09003 3.2 9.68003V10.4C3.2 11.0625 3.7375 11.6 4.4 11.6H11.6C12.2625 11.6 12.8 11.0625 12.8 10.4V9.68003C12.8 8.09003 11.51 6.80002 9.92 6.80002ZM4.3275 6.46502C4.0375 6.17753 3.64 6.00002 3.2 6.00002H1.6C0.7175 6.00002 0 6.71753 0 7.60003V8.40003C0 8.84253 0.3575 9.20003 0.8 9.20003H2.4475C2.605 8.01503 3.32 7.01753 4.3275 6.46502Z'
                fill='#9FA2B4'
            />
        </svg>
    )
}

function IconPost({ className }) {
    return (
        <svg
            className={className}
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M1.41999 18.579C1.13948 18.5785 0.872062 18.4603 0.682993 18.253C0.490439 18.0475 0.394758 17.7695 0.419993 17.489L0.664993 14.795L11.983 3.48103L15.52 7.01703L4.20499 18.33L1.51099 18.575C1.47999 18.578 1.44899 18.579 1.41999 18.579ZM16.226 6.31003L12.69 2.77403L14.811 0.653028C14.9986 0.465251 15.2531 0.359741 15.5185 0.359741C15.7839 0.359741 16.0384 0.465251 16.226 0.653028L18.347 2.77403C18.5348 2.9616 18.6403 3.21612 18.6403 3.48153C18.6403 3.74694 18.5348 4.00146 18.347 4.18903L16.227 6.30903L16.226 6.31003Z'
                opacity='0.4'
                fill='#9FA2B4'
            />
        </svg>
    )
}

function IconWebsite({ className }) {
    return (
        <svg
            className={className}
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z'
                opacity='0.4'
                fill='#9FA2B4'
            />
        </svg>
    )
}

export {
    Statistik,
    Seting,
    Male,
    Female,
    User,
    IconPrev,
    IconNext,
    FileSvg,
    IconGraph,
    IconQuestion,
    IconOffer,
    IconPost,
    IconWebsite,
    IconSpeakers,
    IconUsers,
}
