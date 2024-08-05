type PrimaryButtonProps = {
    size: 'small' | 'medium' | 'large';
    buttonText: string;
};

const SecondaryButton: React.FC<PrimaryButtonProps> = ({ size = "large", buttonText }) => {

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

    const SmallButton = () =>  <button
    type="button"
    className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  >
    {buttonText}
  </button>;

    const MediumButton = () => <button
    type="button"
    className="rounded-md bg-white px-2.5 py-1.5 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  >
    {buttonText}
  </button>;

    const LargeButton = () => <button
    type="button"
    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  >
    {buttonText}
  </button>;

    return (
        <RenderComponent />
    );
}

export default SecondaryButton;