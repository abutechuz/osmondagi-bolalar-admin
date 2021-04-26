function Statistik({ className, width, height }) {
  return (
    <>
      <svg
        className={className}
        width={width ? width : "16"}
        height={height ? height : "16"}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z"
          fill="#9FA2B4"
        />
      </svg>
    </>
  );
}

function Seting({ className }) {
  return (
    <>
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M15.2313 9.86558L13.9 9.09683C14.0344 8.37183 14.0344 7.62808 13.9 6.90308L15.2313 6.13433C15.3844 6.04683 15.4531 5.86558 15.4031 5.69683C15.0563 4.58433 14.4656 3.57808 13.6938 2.74058C13.575 2.61246 13.3813 2.58121 13.2313 2.66871L11.9 3.43746C11.3406 2.95621 10.6969 2.58433 10 2.34058V0.806206C10 0.631206 9.87814 0.478081 9.70627 0.440581C8.55939 0.184331 7.38439 0.196831 6.29377 0.440581C6.12189 0.478081 6.00002 0.631206 6.00002 0.806206V2.34371C5.30627 2.59058 4.66252 2.96246 4.10002 3.44058L2.77189 2.67183C2.61877 2.58433 2.42814 2.61246 2.30939 2.74371C1.53752 3.57808 0.946895 4.58433 0.60002 5.69996C0.546895 5.86871 0.61877 6.04996 0.771895 6.13746L2.10314 6.90621C1.96877 7.63121 1.96877 8.37496 2.10314 9.09996L0.771895 9.86871C0.61877 9.95621 0.55002 10.1375 0.60002 10.3062C0.946895 11.4187 1.53752 12.425 2.30939 13.2625C2.42814 13.3906 2.62189 13.4218 2.77189 13.3343L4.10314 12.5656C4.66252 13.0468 5.30627 13.4187 6.00314 13.6625V15.2C6.00314 15.375 6.12502 15.5281 6.29689 15.5656C7.44377 15.8218 8.61877 15.8093 9.70939 15.5656C9.88127 15.5281 10.0031 15.375 10.0031 15.2V13.6625C10.6969 13.4156 11.3406 13.0437 11.9031 12.5656L13.2344 13.3343C13.3875 13.4218 13.5781 13.3937 13.6969 13.2625C14.4688 12.4281 15.0594 11.4218 15.4063 10.3062C15.4531 10.1343 15.3844 9.95308 15.2313 9.86558ZM8.00002 10.5C6.62189 10.5 5.50002 9.37808 5.50002 7.99996C5.50002 6.62183 6.62189 5.49996 8.00002 5.49996C9.37814 5.49996 10.5 6.62183 10.5 7.99996C10.5 9.37808 9.37814 10.5 8.00002 10.5Z"
          fill="#9FA2B4"
        />
      </svg>
    </>
  );
}

function Male({ className }) {
  return (
    <>
      <svg
        width="15"
        height="31"
        viewBox="0 0 15 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 0C10.2614 0 12.5 1.73491 12.5 3.875C12.5 6.01509 10.2614 7.75 7.5 7.75C4.73859 7.75 2.5 6.01509 2.5 3.875C2.5 1.73491 4.73859 0 7.5 0ZM11.25 8.71875H10.3625C8.5882 9.35104 6.48828 9.37835 4.6375 8.71875H3.75C1.67891 8.71875 0 10.0199 0 11.625V19.8594C0 20.6619 0.839453 21.3125 1.875 21.3125H3.125V29.5469C3.125 30.3494 3.96445 31 5 31H10C11.0355 31 11.875 30.3494 11.875 29.5469V21.3125H13.125C14.1605 21.3125 15 20.6619 15 19.8594V11.625C15 10.0199 13.3211 8.71875 11.25 8.71875Z"
          fill="#332A7C"
        />
      </svg>
    </>
  );
}
function Female({ className }) {
  return (
    <>
      <svg
        width="15"
        height="25"
        viewBox="0 0 15 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.49998 0C9.70891 0 11.4996 1.39912 11.4996 3.125C11.4996 4.85088 9.70891 6.25 7.49998 6.25C5.29105 6.25 3.50033 4.85088 3.50033 3.125C3.50033 1.39912 5.29105 0 7.49998 0ZM14.9545 17.2939L11.9548 7.9189C11.8737 7.66536 11.6864 7.44028 11.4227 7.27945C11.1591 7.11862 10.8342 7.03125 10.4997 7.03125H9.78978C8.37047 7.54116 6.69068 7.56318 5.21018 7.03125H4.50024C4.16575 7.03125 3.84087 7.11862 3.57722 7.27945C3.31358 7.44028 3.12631 7.66536 3.04518 7.9189L0.0454413 17.2939C-0.190913 18.0325 0.524525 18.75 1.5005 18.75H5.0002V23.8281C5.0002 24.4753 5.6717 25 6.50007 25H8.49989C9.32826 25 9.99976 24.4753 9.99976 23.8281V18.75H13.4995C14.4738 18.75 15.1912 18.0336 14.9545 17.2939Z"
          fill="#F44771"
        />
      </svg>
    </>
  );
}

function User({ className }) {
  return (
    <>
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 12C14.4719 12 17.2857 9.31406 17.2857 6C17.2857 2.68594 14.4719 0 11 0C7.52812 0 4.71429 2.68594 4.71429 6C4.71429 9.31406 7.52812 12 11 12ZM15.7045 13.5281L13.3571 22.5L11.7857 16.125L13.3571 13.5H8.64286L10.2143 16.125L8.64286 22.5L6.29554 13.5281C2.7942 13.6875 0 16.4203 0 19.8V21.75C0 22.9922 1.0558 24 2.35714 24H19.6429C20.9442 24 22 22.9922 22 21.75V19.8C22 16.4203 19.2058 13.6875 15.7045 13.5281V13.5281Z"
          fill="#FFA800"
        />
      </svg>
    </>
  );
}

function IconPrev({ className }) {
  return (
    <>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1"
          stroke="#9FA2B4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

function IconNext({ className }) {
  return (
    <>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1"
          stroke="#9FA2B4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

function FileSvg() {
  return (
    <svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M22.9626 5.85759V6.1416H15.6293V0.141602H15.9764C16.3411 0.141603 16.6908 0.260121 16.9487 0.471086L22.5599 5.06207C22.8178 5.27306 22.9626 5.55921 22.9626 5.85759V5.85759ZM15.171 7.6416C14.4147 7.6416 13.796 7.13535 13.796 6.5166V0.141602H2.33765C1.57825 0.141602 0.962646 0.645273 0.962646 1.2666V23.0166C0.962646 23.6379 1.57825 24.1416 2.33765 24.1416H21.5876C22.347 24.1416 22.9626 23.6379 22.9626 23.0166V7.6416H15.171ZM7.41054 8.3916C8.92934 8.3916 10.1605 9.39895 10.1605 10.6416C10.1605 11.8843 8.92934 12.8916 7.41054 12.8916C5.89174 12.8916 4.66054 11.8843 4.66054 10.6416C4.66054 9.39895 5.89179 8.3916 7.41054 8.3916ZM19.3272 19.6416H4.66054L4.68832 17.3689L6.9522 15.5166C7.22067 15.2969 7.62819 15.3197 7.89666 15.5393L10.1605 17.3916L16.0911 12.5393C16.3596 12.3197 16.7949 12.3197 17.0634 12.5393L19.3272 14.3916V19.6416V19.6416Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="22"
            height="24"
            fill="white"
            transform="translate(0.962646 0.141602)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export { Statistik, Seting, Male, Female, User, IconPrev, IconNext, FileSvg };
