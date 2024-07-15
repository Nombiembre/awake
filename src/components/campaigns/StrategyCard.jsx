import { useStore } from "@nanostores/react";
import { campaignStore } from "~/stores/chooseCampaign";
import strategiesDB, { relationships } from "~/lib/strategiesDB";

const card = (data) => {
  const datas = data.map((item) => {
    return (
      <div className="p-4 border rounded-lg border-zinc-300 max-w-[300px] shadow-lg bg-white grid gap-2">
        <h2 className="font-medium">{item.title}</h2>
        <p className="text-zinc-700">{item.desc}</p>
        <button class="mt-6 bg-zinc-800 text-white p-2 rounded-lg hover:bg-zinc-600 transition-colors duration-300">
          Create Brief
        </button>
      </div>
    );
  });

  return datas;
};

export default function StrategyCard({}) {
  const $isSelected = useStore(campaignStore);

  const { ugc, awareness, conversion } = relationships;

  if ($isSelected === "ugc") return card(ugc);
  if ($isSelected === "awareness") return card(awareness);
  if ($isSelected === "conversion") return card(conversion);
  return undefined;
}
