
import Decimal from "decimal.js";
import { useMemo } from "react";




type Props = {
    value: string | number |Decimal,
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    precision?: number,
    loading?: boolean,
    group?: boolean,
    kmt?: boolean,
    isBig?: boolean,
    decimal?: number,
    tiny?: boolean
    floor?: boolean
    minDig?: number
}

const NumberFormat: React.FC<Props> = (props) => {

    const { prefix, suffix, } = props;

    const beautyNumber = useMemo(() => {
        const { value, precision = 16, kmt, isBig = false, decimal, tiny = false, floor = false, minDig = 0 } = props;

        let _value = value
        if (Number.isNaN(Number(_value))) return '--'
        if (isBig && decimal) {
            if (String(_value).indexOf('.') > -1) {
                _value = new Decimal(new Decimal(_value).times(1e8)).div(Math.pow(10, Number(decimal) + 8))
            } else {
                _value = new Decimal(_value).div(Math.pow(10, Number(decimal)))
            }

        }
        try {
            if (tiny && Number(_value) < 0.0000001 && Number(_value) > 0) {
                let string = String(parseFloat(String(_value)));
                let ret = string.replace('.', '').match(/(\d+)e-(\d+)/);
                let left = '';
                let dex = ''
                if (ret && (ret[1] && ret[2])) {
                    left = ret[1].substring(0, precision)
                    dex = String(Number(ret[2]) - 1)
                }
                return { type: 'tiny', left: left, dex }
            }
        } catch (err) {
            return '--'
        }
        if (floor) {
            _value = Math.floor(Number(_value) * Math.pow(10, precision)) / Math.pow(10, precision)
        }

        return Number(_value).toLocaleString(undefined, {
            minimumFractionDigits: minDig,
            maximumFractionDigits: precision,
        })

    }, [props])


    return <>
        {prefix}
        {typeof beautyNumber === 'string' ?
            beautyNumber
            :
            <>0.0
                <span style={{ fontSize: '0.8em', top: "0.2em", position: "relative" }}>
                    {beautyNumber.dex}
                </span>
                {beautyNumber.left}
            </>
        }
        {suffix}
    </>
}

export default NumberFormat