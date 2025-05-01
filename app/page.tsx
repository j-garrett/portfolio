import Image from "next/image";

export default function Page() {
  return (
    <div className="columns-1">
      <h1 className="text-6xl">Jon Garrett</h1>
      <div className="columns-3">
        <div>WaterColors:</div>
        <div>
          <Image
            src="/king-oliver.jpg"
            alt="Profile"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            height={291}
            width={203}
          />
        </div>
      </div>
    </div>
  );
}
