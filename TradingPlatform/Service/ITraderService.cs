﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradingPlatform.Models;

namespace TradingPlatform.Service
{
    interface ITraderService
    {
        void AddTrader(Trader Trader);
        void UpdateTrader(Trader Trader);
        List<Trader> FindTraderByName(string name);
    }
}
