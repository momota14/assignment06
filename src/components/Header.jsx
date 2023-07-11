function Header({ header }) {
  return (
    <div className="text-center py-5 bg-white shadow-sm">
      <div className="text-2xl font-medium capitalize">{header}</div>
    </div>
  );
}

export default Header;
