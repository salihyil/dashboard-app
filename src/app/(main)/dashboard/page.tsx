import AlertInfo from "@/components/alert-info";
import Tab from "@/components/tab";
import { getTableData } from "./transactions/getTableData";

const DashboardPage = async () => {
  const data = await getTableData();

  return (
    <div className="mx-36">
      <AlertInfo />
      <h1 className="font-bold text-3xl mb-8">Proxies & Scraping Infrastructure</h1>
      <Tab tableData={data} />
    </div>
  );
};

export default DashboardPage;
