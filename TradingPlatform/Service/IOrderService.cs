﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradingPlatform.Models;

namespace TradingPlatform.Service
{
    public interface IOrderService
    {
        void AddOrder(Order order);
        List<Order> FindAll();
        List<Order> FindOrderByTrader(Trader trader);
        int GetOrderId(Order order);
    }
}
