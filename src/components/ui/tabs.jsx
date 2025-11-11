import React, { createContext, useContext, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const TabsContext = createContext(null);

function Tabs({ defaultValue, value: controlledValue, onValueChange, className, children, ...props }) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const setValue = (next) => {
    if (controlledValue === undefined) setUncontrolledValue(next);
    if (onValueChange) onValueChange(next);
  };

  const ctx = useMemo(() => ({ value, setValue }), [value]);

  return (
    <TabsContext.Provider value={ctx}>
      <div className={cn(className)} {...props}>{children}</div>
    </TabsContext.Provider>
  );
}

const TabsList = React.forwardRef(function TabsList({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)} {...props}>
      {children}
    </div>
  );
});

const TabsTrigger = React.forwardRef(function TabsTrigger({ value, className, children, ...props }, ref) {
  const ctx = useContext(TabsContext);
  const active = ctx?.value === value;
  return (
    <button
      ref={ref}
      type="button"
      data-state={active ? "active" : "inactive"}
      onClick={() => ctx?.setValue(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

const TabsContent = React.forwardRef(function TabsContent({ value, className, children, ...props }, ref) {
  const ctx = useContext(TabsContext);
  const active = ctx?.value === value;
  if (!active) return null;
  return (
    <div
      ref={ref}
      className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
      {...props}
    >
      {children}
    </div>
  );
});

export { Tabs, TabsList, TabsTrigger, TabsContent };