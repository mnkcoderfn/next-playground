type PrimaryButtonProps = {
    size: 'small' | 'medium' | 'large';
    buttonText: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ size = "large", buttonText }) => {

    const RenderComponent = () => {
        switch (size) {
            case "small":
                return <SmallButton />;
            case "medium":
                return <MediumButton />;
            case "large":
                return <LargeButton />;
            default:
                return <MediumButton />;
        }
    };

    const SmallButton = () => <button
        type="button"
        className="rounded bg-black px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
        {buttonText}
    </button>;

    const MediumButton = () => <button
        type="button"
        className="rounded-md bg-black px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
        {buttonText}
    </button>;

    const LargeButton = () => <button
        type="button"
        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
        {buttonText}
    </button>;

    return (
        <RenderComponent />
    );
}

export default PrimaryButton;