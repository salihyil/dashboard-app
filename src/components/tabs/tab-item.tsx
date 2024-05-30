import { sanitizeForId } from "@/lib/utils";
import { TabItemProps } from "@/types/TabTypes";

const TabItem: React.FC<TabItemProps> = ({ label, children }) => (
  <div
    className="tab-panel"
    role="tabpanel"
    aria-labelledby={`tab-${sanitizeForId(label)}`}
    id={`panel-${sanitizeForId(label)}`}>
    {children}
  </div>
);

export default TabItem;
