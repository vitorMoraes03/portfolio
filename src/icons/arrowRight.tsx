function ArrowRightIcon({ stylesProps }: { stylesProps?: string }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`ionicon ${stylesProps}`}
        viewBox="0 0 512 512"
        width="40"
        height="40"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="58"
          d="M184 112l144 144-144 144"
        />
      </svg>
    </div>
  );
}

export default ArrowRightIcon;
