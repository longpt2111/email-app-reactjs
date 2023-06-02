import React from "react";
import UserAvatar from "../../../UI-component/user-avatar";

const EmailSummary: React.FC = () => {
  return (
    <div className="flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-300 cursor-pointer false">
      <div className="w-1/6">
        <UserAvatar avatarUrl="https://i.pravatar.cc/320?img=56" size="full" />
      </div>
      <div className="w-5/6 flex flex-col items-start justify-between">
        <div className="flex items-center justify-between w-full text-sm text-gray-500 font-medium">
          <p>Eren Jaeger</p>
          <p>22/6/2020</p>
        </div>
        <div>
          <h6 className="text-md font-bold w-full line-clamp-1">
            incentivize frictionless synergies
          </h6>
        </div>
        <div className="w-full">
          <p className="w-full text-sm line-clamp-3 text-gray-500">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSummary;
