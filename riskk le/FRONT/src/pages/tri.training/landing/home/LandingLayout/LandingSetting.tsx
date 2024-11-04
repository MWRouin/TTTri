import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconLaptop from '../../../../../components/Icon/IconLaptop';
import IconMoon from '../../../../../components/Icon/IconMoon';
import IconSettings from '../../../../../components/Icon/IconSettings';
import IconSun from '../../../../../components/Icon/IconSun';
import IconX from '../../../../../components/Icon/IconX';
import { IRootState } from '../../../../../Redux/store';
import { toggleTheme, toggleRTL } from '../../../../../store/themeConfigSlice';


const LandingSetting = () => {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  const [showCustomizer, setShowCustomizer] = useState(false);

  return (
    <div>
      <div className={`${(showCustomizer && '!block') || ''} fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]`} onClick={() => setShowCustomizer(false)}></div>

      <nav
        className={`${
          (showCustomizer && 'ltr:!right-0 rtl:!left-0') || ''
        } bg-white fixed ltr:-right-[400px] rtl:-left-[400px] top-0 bottom-0 w-full max-w-[400px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-300 z-[51] dark:bg-black p-4`}
      >
        <button
          type="button"
          className="bg-primary ltr:rounded-tl-full rtl:rounded-tr-full ltr:rounded-bl-full rtl:rounded-br-full absolute ltr:-left-12 rtl:-right-12 top-0 bottom-0 my-auto w-12 h-10 flex justify-center items-center text-white cursor-pointer"
          onClick={() => setShowCustomizer(!showCustomizer)}
        >
          <IconSettings className="animate-[spin_3s_linear_infinite] w-5 h-5" />
        </button>

        <div className="overflow-y-auto overflow-x-hidden perfect-scrollbar h-full">
          <div className="text-center relative pb-5">
            <button type="button" className="absolute top-0 ltr:right-0 rtl:left-0 opacity-30 hover:opacity-100 dark:text-white" onClick={() => setShowCustomizer(false)}>
              <IconX className="w-5 h-5" />
            </button>

            <h4 className="mb-1 dark:text-white">TEMPLATE CUSTOMIZER</h4>
            <p className="text-white-dark">Set preferences that will be cookied for your live preview demonstration.</p>
          </div>

          <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3">
            <h5 className="mb-1 text-base dark:text-white leading-none">Color Scheme</h5>
            <p className="text-white-dark text-xs">Overall light or dark presentation.</p>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <button type="button" className={`${themeConfig.theme === 'light' ? 'btn-primary' : 'btn-outline-primary'} btn`} onClick={() => dispatch(toggleTheme('light'))}>
                <IconSun className="w-5 h-5 shrink-0 ltr:mr-2 rtl:ml-2" />
                Light
              </button>

              <button type="button" className={`${themeConfig.theme === 'dark' ? 'btn-primary' : 'btn-outline-primary'} btn`} onClick={() => dispatch(toggleTheme('dark'))}>
                <IconMoon className="w-5 h-5 shrink-0 ltr:mr-2 rtl:ml-2" />
                Dark
              </button>

              <button type="button" className={`${themeConfig.theme === 'system' ? 'btn-primary' : 'btn-outline-primary'} btn`} onClick={() => dispatch(toggleTheme('system'))}>
                <IconLaptop className="w-5 h-5 shrink-0 ltr:mr-2 rtl:ml-2" />
                System
              </button>
            </div>
          </div>

          <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3">
            <h5 className="mb-1 text-base dark:text-white leading-none">Direction</h5>
            <p className="text-white-dark text-xs">Select the direction for your app.</p>
            <div className="flex gap-2 mt-3">
              <button type="button" className={`${themeConfig.rtlClass === 'ltr' ? 'btn-primary' : 'btn-outline-primary'} btn flex-auto`} onClick={() => dispatch(toggleRTL('ltr'))}>
                LTR
              </button>

              <button type="button" className={`${themeConfig.rtlClass === 'rtl' ? 'btn-primary' : 'btn-outline-primary'} btn flex-auto`} onClick={() => dispatch(toggleRTL('rtl'))}>
                RTL
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingSetting;
