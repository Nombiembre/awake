import { useStore } from "@nanostores/react";
import { campaignStore } from "~/stores/chooseCampaign";
import { relationships } from "~/lib/strategiesDB";
import { useState } from "react";

const card = (data) => {
  return data.map((item, index) => {
    const value = item.title.toLowerCase().split(" ").join("-");

    return (
      <div className="p-4 border rounded-lg border-zinc-300 max-w-[300px] shadow-lg bg-white grid gap-2">
        <h2 className="font-medium">{item.title}</h2>
        <p className="text-zinc-700">{item.desc}</p>
        <button
          value={value}
          type="submit"
          className="campaign-strategy mt-6 bg-zinc-800 text-white p-2 rounded-lg hover:bg-zinc-600 transition-colors duration-300 strategy-button"
        >
          Create Brief
        </button>
      </div>
    );
  });
};

export default function StrategyCard({}) {
  const $isSelected = useStore(campaignStore);

  const { ugc, awareness, conversion } = relationships;
  if ($isSelected === "ugc") return card(ugc);
  if ($isSelected === "awareness") return card(awareness);
  if ($isSelected === "conversion") return card(conversion);

  return null;
}
