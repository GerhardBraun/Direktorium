import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

const TooltipProvider = TooltipPrimitive.Provider;

// Angepasste Tooltip-Komponente mit verbessertem Touch-Support
const Tooltip = React.forwardRef(({ children, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);
    const touchTimeout = React.useRef();

    const handleTouch = (e) => {
        e.preventDefault(); // Verhindert Standard-Touch-Aktionen wie Zoom
        if (touchTimeout.current) clearTimeout(touchTimeout.current);
        setOpen(true);
        touchTimeout.current = setTimeout(() => {
            setOpen(false);
        }, 7000); // Tooltip bleibt 3 Sekunden sichtbar
    };

    return (
        <TooltipPrimitive.Root
            open={open}
            onOpenChange={setOpen}
            {...props}
        >
            <div
                onClick={handleTouch}
                onTouchStart={(e) => e.preventDefault()} // Verhindert Zoom-Geste
                style={{ touchAction: 'none' }} // Deaktiviert Browser-Touch-Aktionen
            >
                {children}
            </div>
        </TooltipPrimitive.Root>
    );
});

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className="z-50 overflow-hidden rounded-md border bg-white px-3 py-1.5 text-sm text-gray-700 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
        {...props}
    />
))

Tooltip.displayName = "Tooltip"
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }