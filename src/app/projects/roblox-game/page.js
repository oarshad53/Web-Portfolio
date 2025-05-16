import Header from '@/components/header.js';
import Tag from '@/components/tag.js'

export default function RobloxGamePage() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header className="text-3xl font-bold font-outfit pt-10 pb-3">ROBLOX Combat Game</Header>

      <div className = "flex flex-row pb-5">
        {/*Project Tags*/}
        <Tag bgClassName = "bg-blue-700 bg-opacity-30" textClassName = "text-blue-900">Luau</Tag>

      </div>

      <p className="font-outfit text-lg">
        filler
      </p>

      <Tag></Tag>

    </div>
  );
}