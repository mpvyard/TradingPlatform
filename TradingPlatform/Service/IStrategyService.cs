﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradingPlatform.Models;

namespace TradingPlatform.Service
{
    interface IStrategyService
    {
        void AddStrategy(Strategy strategy);
        void DeleteStrategyByName(string name);
    }
}
