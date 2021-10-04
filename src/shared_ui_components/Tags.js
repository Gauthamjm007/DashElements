export default function Tags({ type = "default", value }) {
  const CRYPTO_TYPES = ["btc", "eth"];
  return (
    <>
      {CRYPTO_TYPES.includes(type) ? (
        <div className={`tagsWrapper ${type} paragraph`}>
          {value} {type}
        </div>
      ) : (
        <div className={`tagsWrapper default paragraph`}>{value}</div>
      )}
    </>
  );
}
